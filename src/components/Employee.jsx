// eslint-disable-next-line react/prop-types
const Employee = ({ urlImg, name, role }) => {
  return (
    <div className="flex flex-col shadow-md">
        <img src={urlImg} alt="employee" />
        <div className="p-5">
            <div className="name mb-2 font-medium text-lg">{name}</div>
            <div className="role text-gray-400">{role}</div>
        </div>
    </div>
  )
}

export default Employee