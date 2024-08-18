const Projectcard=({ProjectName,ProjectNO,description,imageUrl,GitHubUrl})=>{
  return(
    <>
     
              <div className="border text-card-foreground bg-white dark:bg-gray-950 rounded-lg shadow-lg" data-v0-t="card" style={{width:"90vw",
                    display: "flex",
                    padding: "30px",
                    height: "80vh",
              }}>
                <div className="space-y-1.5 p-6 flex flex-col items-start gap-2">
                 <video src={imageUrl} title="JARVIS" controls="true" style={{
                  width: "100%",
                  height: "95%",
                 }} >
                 </video>
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-rose-50 profetion">
                   {ProjectName}
                  </div>
                </div>
                <div className="space-y-2 p-6" style={{
                  textAlign:'center',
                  padding:"20px",
                  display:"flex",
                  alignItems:"center",
                  flexDirection:'column',
                  gap:"20px"
                }}>
                  <h3 className="text-lg font-semibold text-rose-50">Project {ProjectNO}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                   {description}
                  </p>
                  <div className="flex gap-2 ">
                    <a
                       className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href={GitHubUrl}
                      rel="ugc"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
    
    </>
  )
}
export default Projectcard;