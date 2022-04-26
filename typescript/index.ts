import * as fs from 'fs'
import { parseJSON } from 'date-fns'

export const isThisThingOn = (): Date => {
    return parseJSON('2021-11-15T16:00:00Z')
}
