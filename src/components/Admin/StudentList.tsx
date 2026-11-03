
import type { EnrolledStudents } from "#/types"

interface EnrolledStudentsProps {
  students: EnrolledStudents[]
}

export function StudentList ({ students }:EnrolledStudentsProps ){
  if (students.length === 0){
    return <div>No Students enrolled</div>
  }

  return(
    <div>
      {students.map((student) => <div key={student.name}>{student.name }</div>)}
    </div>

  )
}
