 interface EnrolledStudents {
  id :string
  name: string
  grade: string
  courses:string[]
}

type EnrolledStudentsData = EnrolledStudents[]


export type{
  EnrolledStudents,
  EnrolledStudentsData

}
