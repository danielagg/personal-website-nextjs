import { NextPage } from "next";

const Docs: NextPage = () => {
  const linkStlye =
    "cursor-pointer underline text-blue-800 hover:text-blue-500";
  return (
    <div>
      <ul className="list-disc list-inside m-24 text-lg space-y-4">
        <li>
          <a
            onClick={() => window.open("/Application.pdf")}
            className={linkStlye}
          >
            Application form
          </a>
        </li>
        <li>
          <a
            onClick={() => window.open("/Application_filled.pdf")}
            className={linkStlye}
          >
            Application form filled
          </a>
        </li>
        <li>
          <a
            onClick={() => window.open("/Authorization.pdf")}
            className={linkStlye}
          >
            Authorization
          </a>
        </li>
        <li>
          <a
            onClick={() => window.open("/Authorization_filled.pdf")}
            className={linkStlye}
          >
            Authorization filled
          </a>
        </li>
        <li>
          <a onClick={() => window.open("/Passport.jpg")} className={linkStlye}>
            Passport
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Docs;
