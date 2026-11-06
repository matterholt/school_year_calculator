import { createServerFn } from '@tanstack/react-start'
import { v4 as uuidv4 } from 'uuid' // Add this import

import * as fs from 'node:fs'
import type { EnrolledStudent, EnrolledStudentsData } from '#/types'

const TEMP_STUDENTDATA = 'src/data/students.JSON'

export const getStudents = createServerFn({ method: 'GET' }).handler(
  async () => {
    const students = await fs.promises.readFile(TEMP_STUDENTDATA, 'utf-8')
    return JSON.parse(students) as EnrolledStudentsData
  },
)

export const addStudent = createServerFn({ method: 'POST' })
  .validator((data: { name: string; grade: string }) => {
    // check if values are empty
    if (!data.name || !data.name.trim()) {
      throw new Error('Name of student required')
    }
    if (!data.grade || !data.grade.trim()) {
      throw new Error('Name of Grade required')
    }
    return data
  })
  .handler(async ({ data }) => {
    try {
      const storedStudents = await getStudents()

      const newStudent: EnrolledStudent = {
        id: uuidv4(),
        name: data.name,
        grade: data.grade,
      }

      const updatedStudents = [...storedStudents, newStudent]
      await fs.promises.writeFile(
        TEMP_STUDENTDATA,
        JSON.stringify(updatedStudents, null, 2),
        'utf-8',
      )

      return newStudent
    } catch (error) {
      console.error('failed to add student', error)
      throw new Error('failed to add student')
    }
  })
