import {  useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'


import { addStudent } from '#/serverActions/enrolledStudents'

const gradeLevels = [
  { value: 'PK', label: 'Pre-K' },
  { value: 'K', label: 'Kindergarten' },
  ...Array.from({ length: 12 }, (_, index) => ({
    value: String(index + 1),
    label: `Grade ${index + 1}`,
  })),
]

export function AddStudentForm() {

  const [name, setName] = useState('')
  const [grade, setGrade] = useState("")

  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const handleChange = (event) => {
    setGrade(event.target.value )
  }


  async function handleSubmit(event) {
    event.preventDefault()

    console.log("SEENDING")
    if (!name || !grade || status === "submitting") return

    try {
      setStatus("submitting")
      await addStudent(
        {
          data:{name, grade}
        }
      )
    }
    catch (error) {
      console.error("failed to add student", error)
      setErrorMsg(error)
      setStatus("error")
    } finally {
      setStatus("idle")
    }

  }

  return (
    <form   onSubmit={handleSubmit} >
      <h2 className="text-center text-2xl">ADD STUDENT</h2>
      {
        status === 'error' && <div>THERE IS AN ERROR { errorMsg}</div>
      }


      <fieldset disabled={status=== 'saving'} >
        <Box
          sx={{
            width: 300,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <TextField id="student_name" label="Student Name" variant="standard"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}/>
          <FormControl fullWidth>
            <InputLabel id="student_grade">Grade</InputLabel>
            <Select
              labelId="student_grade"
              id="student_grade"
              value={grade}
              label="Grade"
              onChange={handleChange}
            >
              {gradeLevels.map(({value, label})=>
                <MenuItem value={value}>{label}</MenuItem>
              )}
            </Select>
          </FormControl>
          <Box>

          <Button type="submit">Submit & Close</Button>
          </Box>
        </Box>
      </fieldset>
    </form>
  )
}
