interface Event {
  Id?: number
  Subject?: string
  StartTime?: Date
  EndTime?: Date
  Category: string
  CategoryId: number
  Recurrence?: string
  Description?: string
  Location?: string
  IsAllDay?: boolean
  guid?: string
  etag?: string
  uri?: string
  type?: string
}
export type { Event }
