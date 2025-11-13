import axios from 'axios';

const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL ?? 'https://api.mainnet-beta.solana.com';

type SlotResponse = {
  result: number;
};

type SlotLeaderResponse = {
  result: string;
};

export interface SlotSummary {
  slot: number;
  leader: string;
}

export async function getLatestSlotSummary(): Promise<SlotSummary> {
  const [slotRes, leaderRes] = await Promise.all([
    axios.post<SlotResponse>(SOLANA_RPC_URL, {
      jsonrpc: '2.0',
      id: 1,
      method: 'getSlot'
    }),
    axios.post<SlotLeaderResponse>(SOLANA_RPC_URL, {
      jsonrpc: '2.0',
      id: 1,
      method: 'getSlotLeader'
    })
  ]);

  return {
    slot: slotRes.data.result,
    leader: leaderRes.data.result
  };
}
