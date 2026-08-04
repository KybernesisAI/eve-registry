import { eveChannel } from "eve/channels/eve";
import { kybernesisAuth } from "@kybernesis/enterprise";

// Admits only callers holding a Kybernesis control-plane session WITH a grant
// for this agent. Register the agent in the control plane under the same name.
export default eveChannel({
  auth: [
    kybernesisAuth({
      issuer: process.env.KYBERNESIS_ISSUER!,
      agent: process.env.KYBERNESIS_AGENT!,
    }),
  ],
});
