"use client"
import { IoSearch } from "react-icons/io5"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();

  const handleSearch =  useDebouncedCallback((term: string) => {
    // use debounce callback di gunakan untuk menahan/ menunggu beberapa detik perintah handleSearch dijalankan
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    }else{
      params.delete("q");
    }

    const url = `${pathName}?${params.toString()}`; 

    replace(url);
  }, 500)
  return (
    <div className='relative flex flex-1'>
        <input type="text" className='w-full border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-sm ' placeholder='Search...' 
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("q")?.toString()}
        />
        <IoSearch className='absolute top-2 left-3 h-5 text-xl text-gray-400' />
    </div>
  )
}

export default Search