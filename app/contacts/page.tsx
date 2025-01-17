import { CreateButton } from "@/components/buttons";
import ContactTable from "@/components/contact-table";
import Search from "@/components/search";

const Contacts = ({
  searchParams
}:{
  searchParams?:{
    q?:string;
    page?:string
  }
}) => {

  const query = searchParams?.q || "";
  const currentPage = Number(searchParams?.page) || 1
  
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage} />
    </div>
  );
};

export default Contacts;
