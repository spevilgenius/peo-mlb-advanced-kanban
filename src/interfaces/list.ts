import { Fields } from './fields'

interface List {
  Site?: string
  WebId?: string
  Id?: string // list guid
  Url?: string // may not be required
  Title?: string
  FieldsUri?: string // will contain the uri to get the fields for this list
  Fields: Fields
  ListFields?: any[]
  Selected?: boolean
}
export type { List }
