export interface TokenHolder {
    address: string;
    amount: string;
  }
  
  export interface TokenDetails {
    tick: string;
    max: string;
    lim: string;
    pre: string;
    to: string;
    dec: string;
    mod: string;
    minted: string;
    burned: string;
    opScoreAdd: string;
    opScoreMod: string;
    state: string;
    hashRev: string;
    mtsAdd: string;
    holderTotal: string;
    transferTotal: string;
    mintTotal: string;
    holder: TokenHolder[];
    logo?: string;
  }
  
  export interface KasplexTokenResponse {
    message: string;
    result: TokenDetails[];
  }
  