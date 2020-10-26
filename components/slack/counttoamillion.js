import { Card } from 'theme-ui'
import { useEffect, useState } from 'react'

const CountToAMillion = () => {
  const [number, setNumber] = useState(null)
  useEffect(() => {
    fetch('/api/channels/counttest')
      .then(resp => resp.text())
      .then(resp => {
        setNumber(resp)
      })
      .catch(e => {
        console.log(e)
      })
  })
  return (
    <Card
      bg="green"
      sx={{
        color: 'white',
        fontSize: '23px',
        fontWeight: 900
      }}
    >
      <div>
        #counttoamillion
        {number
          ? [
              <br />,
              <span
                style={{
                  border: '3px solid rgba(255, 255, 255, 0.8)',
                  padding: '5px 10px',
                  borderRadius: 10,
                  display: 'inline-block',
                  marginTop: 5
                }}
              >
                {number}
              </span>
            ]
          : ''}
      </div>
    </Card>
  )
}

export default CountToAMillion
