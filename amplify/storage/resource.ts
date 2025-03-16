import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "ai-ux-insights-Bucket",
  access: (allow) => ({
    "prodcut-images/*": [
      allow.groups(["Admins"]).to(["read", "write", "delete"]),
      allow.authenticated.to(["read"]),
      allow.guest.to(["read"]),
    ],
  }),
});
