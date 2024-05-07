const Goto=({profileshow})=>{
  return(
    <>
<div class="fixed bottom-4 right-4">
  <button
    aria-label="Go to top"
    class="flex h-12 w-12 items-center justify-center rounded-full bg-[#00BFFF] text-gray-50 shadow-lg transition-colors hover:bg-[#00BFFF]/90 focus:outline-none focus:ring-2 focus:ring-[#00BFFF] focus:ring-offset-2 dark:bg-[#00BFFF] dark:text-gray-900 dark:hover:bg-[#00BFFF]/90 dark:focus:ring-[#00BFFF]"
    onClick={()=>profileshow.current?.scrollIntoView({
      behavior:"smooth"
    })}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-6 w-6"
    >
      <path d="m5 12 7-7 7 7"></path>
      <path d="M12 19V5"></path>
    </svg>
  </button>
</div>
    </>
  )
}
export default Goto;