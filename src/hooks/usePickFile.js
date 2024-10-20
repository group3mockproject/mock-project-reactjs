import { useState } from "react"


const usePickFile = ({ accept = "image/*" }) => {
    const [file, setFile] = useState(null);
    const [fakeUrl, setFakeUrl] = useState(null)

    const handleChangeFile = () => {
        const input = Object.assign(
            document.createElement('input'), {
            type: 'file',
            accept: accept,
        })
        input.addEventListener('change', () => {
            if (input.files && input.files.length) {
                const _file = input.files[0]
                setFakeUrl(URL.createObjectURL(_file))
                setFile(_file)
                console.log({ _file })
            }
        })

        input.click()
    }

    return { file, fakeUrl, handleChangeFile }
}

export default usePickFile