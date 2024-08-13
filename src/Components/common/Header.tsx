
type HeaderType={
    text:string,
    bold?:boolean
}

const Header = ({text,bold=false}:HeaderType) => {
  return (
    <div className="flex w-full justify-center items-center p-2">
        <h1 className={`${bold? "font-bold":""} text-md md:text-xl lg:text-4xl`}>{text}</h1>
      </div>
  )
}

export default Header