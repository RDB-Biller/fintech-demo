export function buildISOMessage(data) {
  return {
    Document: {
      CstmrCdtTrfInitn: {
        GrpHdr: {
          MsgId: "MSG-" + Date.now(),
          CreDtTm: new Date().toISOString()
        },
        PmtInf: {
          Dbtr: { Nm: data.debtor },
          Cdtr: { Nm: data.creditor },
          Amt: {
            InstdAmt: {
              value: data.amount,
              Ccy: "GHS"
            }
          }
        }
      }
    }
  };
}
