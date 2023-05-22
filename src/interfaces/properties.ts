import { Category } from './category'
import { List } from './list'
import { Site } from './site'

interface CalendarProps {
  Title?: string
  Sites: Array<Site>
  Lists: Array<List>
  Categories: Array<Category>
}
export type { CalendarProps }
