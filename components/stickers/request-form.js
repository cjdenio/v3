import { Card, Label, Input, Checkbox, Textarea } from 'theme-ui'
import useForm from '../../lib/use-form'
import Submit from '../submit'

const RequestForm = () => {
  const { status, formProps, useField } = useForm('/api/stickers')

  return (
    <form {...formProps}>
      <Label>
        Full name
        <Input {...useField('name')} placeholder="Fiona Hackworth" required />
      </Label>
      <Label>
        Email address (for tracking)
        <Input
          {...useField('email')}
          placeholder="fiona@hackclub.com"
          required
        />
      </Label>
      <Label>
        Address (first line)
        <Input
          {...useField('addressFirst')}
          placeholder="8605 Santa Monica Blvd"
          required
        />
      </Label>
      <Label>
        Address (second line) (optional)
        <Input
          {...useField('addressSecond')}
          placeholder="#86294"
        />
      </Label>
      <Label>
        City
        <Input
          {...useField('city')}
          placeholder="West Hollywood"
          required
        />
      </Label>
      <Label>
        State/Province
        <Input
          {...useField('state')}
          placeholder="California"
          required
        />
      </Label>
      <Label>
        Zip Code
        <Input
          {...useField('zipCode')}
          placeholder="90069"
        />
      </Label>
      <Submit status={status} />
    </form>
  )
}

export default RequestForm