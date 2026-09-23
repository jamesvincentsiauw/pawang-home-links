import { courses, catalogLatencyMs } from '../data/catalog'

export default defineEventHandler(async () => {
  await new Promise(resolve => setTimeout(resolve, catalogLatencyMs))
  return courses
})
