import { createFileRoute } from '@tanstack/react-router'
import { StudentList } from '#/components/admin/StudentList'

import { getStudents } from '#/serverActions/enrolledStudents'

export const Route = createFileRoute('/admin')({
  loader: async () => {
    return getStudents()
  },
  component: RouteComponent,
})

function RouteComponent() {
  const students = Route.useLoaderData()

  return <div>Hello "/admin"!
    students
    <StudentList students={students}/>

  </div>
}
