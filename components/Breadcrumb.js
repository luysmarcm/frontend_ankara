import{ useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const convertBreadcrumb = (string) => {
  const split = string.split("?", 1)
  
	return split[0]
		.replace(/-/g, " ")
		.replace(/oe/g, "ö")
		.replace(/ae/g, "ä")
		.replace(/ue/g, "ü")
		.replace("/", "")
		.replace("/?", "")
		.toUpperCase()
};

const Breadcrumb = () => {
  	
	const router = useRouter();
	const [breadcrumbs, setBreadcrumbs] = useState(null);

	useEffect(() => {
		if (router) {
			const linkPath = router.asPath.split("/");
			linkPath.shift();

			const pathArray = linkPath.map((path, i) => {
				return {
					breadcrumb: path,
					href: "/" + linkPath.slice(0, i + 1).join("/"),
				};
			});

			setBreadcrumbs(pathArray);
		}
	}, [router]);

	if (!breadcrumbs) {
		return null;
	}
	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol className="inline-flex items-center">
					<li>
						<Link href="/">
							<a className="inline-flex items-center text-sm text-black hover:text-primary">
								<svg
									className="mr-2 w-4 h-4"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
								</svg>
								INICIO
							</a>
						</Link>
					</li>

					{breadcrumbs.map((breadcrumb, i) => (
						<li key={breadcrumb.href}>
							<Link href={breadcrumb.href}>
								<a className="inline-flex items-center text-sm text-black	 hover:text-primary">
									<svg
										className="w-6 h-6 text-gray-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										></path>
									</svg>
									<span>{convertBreadcrumb(breadcrumb.breadcrumb)}</span>
								</a>
							</Link>
						</li>
					))}
				
			</ol>
		</nav>
	);
};

export default Breadcrumb;
