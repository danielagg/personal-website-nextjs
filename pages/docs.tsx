import { NextPage } from "next";

const Docs: NextPage = () => {
  const linkStlye =
    "cursor-pointer underline text-blue-800 hover:text-blue-500";
  return (
    <div>
      <ul className="list-disc list-inside m-24 text-lg space-y-4">
        <li>
          <a
            onClick={() => window.open("/appointment.pdf")}
            className={linkStlye}
          >
            Appointment
          </a>
        </li>
        <li>
          <a
            onClick={() => window.open("/Rep_filled.pdf")}
            className={linkStlye}
          >
            Rep filled
          </a>
        </li>
        <li>
          <a
            onClick={() => window.open("/Rep_empty.pdf")}
            className={linkStlye}
          >
            Rep empty
          </a>
        </li>
        <li>
          <a onClick={() => window.open("/to_bcn.pdf")} className={linkStlye}>
            TO BCN
          </a>
        </li>
        <li>
          <a onClick={() => window.open("/to_bud.pdf")} className={linkStlye}>
            TO BUD
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Docs;
