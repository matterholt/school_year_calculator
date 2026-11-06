import * as React from 'react'

import type { EnrolledStudent } from '#/types'

import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'

interface EnrolledStudentsProps {
  students: EnrolledStudent[]
}

export function StudentList({ students }: EnrolledStudentsProps) {
  if (students.length === 0) {
    return <div>No Students enrolled</div>
  }

  const [activeStudentIndex, setActiveStudentIndex] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveStudentIndex(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <div>

    <Tabs  value={activeStudentIndex} aria-label="Student Data Tabs" onChange={handleChange}>
        {students.map((student,idx) => (
          <Tab label={student.name}  {...a11yProps(0)}/>
        ))}
    </Tabs>
      <div style={{outline:"solid"} }>
        <div>Active Student {students[activeStudentIndex].name}</div>
      </div>
    </div>
  )
}
