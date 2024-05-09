				import worker, * as OTHER_EXPORTS from "/Users/hmatsu47/cloudflare-workers-pg-connect/src/index.ts";
				import * as __MIDDLEWARE_0__ from "/Users/hmatsu47/cloudflare-workers-pg-connect/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "/Users/hmatsu47/cloudflare-workers-pg-connect/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "/Users/hmatsu47/cloudflare-workers-pg-connect/src/index.ts";
				export default worker;