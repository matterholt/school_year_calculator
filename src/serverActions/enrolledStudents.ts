import { createServerFn } from '@tanstack/react-start'

import * as fs from 'node:fs'
import type { EnrolledStudentsData } from '#/types'


const TEMP_STUDENTDATA = 'src/data/students.JSON'


export const getStudents = createServerFn({method:'GET'}).handler(async ()=>{
  const students = await fs.promises.readFile(TEMP_STUDENTDATA , 'utf-8')
  return JSON.parse(students) as EnrolledStudentsData
})
