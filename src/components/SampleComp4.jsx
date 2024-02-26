import { useForm } from 'react-hook-form'
import withWrapper from './withWrapper'
import Test from './Test'
import CommonComp from './CommonComp'

const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} />
  </>
)

const Checkbox = ({ label, register }) => (
  <>
    <label>{label}</label>
    <input type="checkbox" {...register(label)} />
  </>
)

export default function SampleComp4() {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  const imsiCom = withWrapper(Test, { name: 'test' })

  return (
    <>
      <div>
        <h1>React Hook Form</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input label="Name" register={register} required />
        </div>
        <div>Hobby</div>
        <div>
          <input type="checkbox" {...register('read')} />
          책읽기
        </div>
        <div>
          <input type="checkbox" {...register('game')} />
          게임하기
        </div>
        <div>
          <Checkbox label="movie" register={register} />
        </div>
        <input type="submit" />
      </form>
      {withWrapper(Test, { name: 'test' })}
      <CommonComp />
    </>
  )
}
