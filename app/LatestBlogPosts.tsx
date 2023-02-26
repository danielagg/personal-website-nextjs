export const LatestBlogPosts = () => {
  const linkClass =
    "cursor-pointer text-green-500 dark:text-emerald-500 hover:underline";

  // https://dolphin-app-89fo4.ondigitalocean.app/api/posts?sort=id:desc&pagination[page]=1&pagination[pageSize]=3

  return (
    <div className="w-full px-6 lg:px-0 text-center lg:text-left">
      <div className="text-xl font-bold">Latest Blog Posts</div>

      <ul className="mt-4 list-disc list-inside space-y-2">
        <li>
          <a
            href="https://apiumhub.com/tech-blog-barcelona/azure-elastic-jobs-for-sql-databases/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Azure Elastic Jobs For SQL Databases
          </a>
        </li>
        <li>
          <a
            href="https://apiumhub.com/tech-blog-barcelona/comparing-iac-tools-for-azure-terraform-and-bicep/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Comparing IaC Tools For Azure: Terraform And Bicep
          </a>
        </li>
        <li>
          <a
            href="https://apiumhub.com/tech-blog-barcelona/build-a-bot-with-the-new-bot-framework-composer/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Build A Bot With The New Bot Framework Composer
          </a>
        </li>
      </ul>
    </div>
  );
};
