import { rejects } from 'assert'
import { resolve } from 'path'
import React from 'react'

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload(() => {
      resolve(fileReader.result)
    })

    fileReader.onerror((error) => {
      reject(error)
    })
  })
}

export default convertToBase64