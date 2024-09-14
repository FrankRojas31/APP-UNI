import SideBar from "../../Navigation/view/SideBar";

export default function NotFoundView() {
  return (
    <>
    <SideBar>
      <div className="text-blue-500 text-center">
        <h1 className="text-4xl font-bold uppercase">No existe esta Pagina</h1>
      </div>
    </SideBar>
    </>
  );
}
