


const ProjectCards = ({title, titleBgColor, titleTextColor, borderColor, bgColor, children}) => {

  return (
    <div className={`border-${borderColor} border-4 bg-${bgColor} rounded-3xl p-4 whitespace-pre-wrap pb-8 text-pretty`}>
      <h3 className={`mb-10 -mx-10 text-${titleTextColor} bg-${titleBgColor} text-2xl rounded-2xl py-1>`}>{title}</h3>
      {children}
    </div>
  )
}

export default ProjectCards