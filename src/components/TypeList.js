import Type from './Type'

const TypeList = ({typeList}) => {
    return (
        <>
        {typeList.map((type) => (
          <Type key={type.url} type={type} />
        ))}
      </>
    )
}

export default TypeList
