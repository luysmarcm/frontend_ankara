import { url } from "config/url";
export function loader(src) {
	return `${url}${src}`;
}

export function convertUrl(obj) {
	return `${obj.hash}${obj.ext}`;
}
