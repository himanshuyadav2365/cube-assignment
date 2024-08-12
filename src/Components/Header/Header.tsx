import "./header.css"

type HeaderType={
    text:string
}

const Header = ({text}:HeaderType) => {
  return (
      <div className="header-container">
        <h1>{text}</h1>
      </div>
  )
}

export default Header