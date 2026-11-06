import * as React from 'react'

import { createFileRoute } from '@tanstack/react-router'
import { StudentList } from '#/components/admin/StudentList'
import { PopOver } from '#/components/general/PopOver'
import { AddStudentForm } from '#/components/admin/AddStudentForm'


import { getStudents } from '#/serverActions/enrolledStudents'

export const Route = createFileRoute('/admin')({
  loader: async () => {
    return getStudents()
  },
  component: RouteComponent,
})




function RouteComponent() {
  const students = Route.useLoaderData()

  const [activePopOver, setActivePopOver] = React.useState(true)


  
  return (
    <React.Fragment>
      <div>
        <PopOver name={"Add Student"} activePopOver={ activePopOver}>
          <AddStudentForm />
        </PopOver>

      </div>
      <div>
        Hello "/admin"! students
          <StudentList students={students} />
      </div>
    </React.Fragment>
  )
}
