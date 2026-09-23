import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

// Vue wraps slot content in fragment markers (<!--[-->...<!--]-->) in SSR output.
const FRAGMENT = String.raw`(?:\s|<!--[^>]*-->)*`

function link(href: string, label: string) {
  return new RegExp(`<a[^>]+href="${href}"[^>]*>${FRAGMENT}${label}`)
}

// These run against the server-rendered HTML only: no browser, no hydration.
describe('homepage server HTML', async () => {
  await setup({ server: true })

  it('renders the main CTAs as links with real destinations', async () => {
    const html = await $fetch<string>('/')
    expect(html).toMatch(link('/courses', 'Belajar Sekarang'))
    expect(html).toMatch(link('/courses', 'Lihat Semua Kelas'))
    expect(html).toMatch(link('/tracks', 'Lihat Semua Jalur'))
    expect(html).toMatch(link('/?#jalur', 'Lihat Jalur Belajar'))
    expect(html).not.toMatch(new RegExp(`<button[^>]*>${FRAGMENT}(Belajar Sekarang|Lihat Semua Kelas|Lihat Semua Jalur|Lihat Jalur Belajar)`))
  })

  it('includes the course and track catalog before any JavaScript runs', async () => {
    const html = await $fetch<string>('/')
    expect(html).toContain('ChatGPT buat Semua Orang')
    expect(html).toContain('href="/courses/chatgpt-buat-semua"')
    expect(html).toContain('Buat Mahasiswa')
    expect(html).toContain('href="/tracks/buat-mahasiswa"')
    expect(html).not.toContain('class="skeleton"')
  })
})
