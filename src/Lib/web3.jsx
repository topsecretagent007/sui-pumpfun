import { Transaction } from "@mysten/sui/transactions";
import init from '@mysten/move-bytecode-template';
import * as wasm from '@mysten/move-bytecode-template/move_bytecode_template';
import { toB64, fromB64 } from '@mysten/sui/utils';
import { bcs } from '@mysten/bcs';

const bytecode = ""
const bondingContract = ""
const MEME_CONFIG = ""
const INITIAL_VERSION = 

setupByteCode();

export const placeDevMath = async (percent) => {
  // const percent  = 1;
  const total_token_amount = 1000_000_000_000_000;
  const token_amount = (total_token_amount) * percent;
  const virtual_sui_amount = 1_500_000_000_000;
  const listing_fee = 1_000_000_000;
  const _y = 1_000_000_000_000_000;
  const swap_fee_bps = 200;

  return [total_required_sui.toFixed(0), token_amount.toFixed(0)]
}

const updateTemplate = (tokenData) => {
  const encoder = new TextEncoder();
  const d = wasm.deserialize(fromB64(bytecode))
  const ddd = wasm.serialize(d)

  let updated = wasm.update_identifiers(ddd, {
  });

  updated = wasm.update_constants(
    'U64'
  );

  updated = wasm.update_constants(
    'Vector(U8)'
  );

  updated = wasm.update_constants(
    'Vector(U8)'
  );

  updated = wasm.update_constants(
    'Vector(U8)'
  );

  updated = wasm.update_constants(
    'Vector(U8)'
  );

  updated = wasm.update_constants(
    'Vector(U8)'
  );

  updated = wasm.update_constants(
    'Vector(U8)'
  );

  updated = wasm.update_constants(
    'Vector(U8)'
  );

  return updated;
};

export const createCoinWeb3 = async (wallet, client, token) => {
  try {
    localStorage.setItem("tempID", token.tempID);
    let tx = new Transaction();

    const [upgradeCap] = tx.publish({
    });
    tx.transferObjects([upgradeCap], "0x0");

    const [coin] = tx.splitCoins(tx.gas, [tx.pure.u64(required_sui)]);
    tx.moveCall({
    });

    const resData = await wallet.signAndExecuteTransaction({
      transaction: tx,
    },
      {
        execute: ({ bytes, signature }) => {
          return client.executeTransactionBlock({
          });
        },
      }
    );

    const objectChanges = resData?.objectChanges;
    console.log(objectChanges)
    localStorage.setItem("meme_step", 1)
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
}

export const acceptDevOrderWeb3 = async (wallet, client, token) => {
  try {

    let tx = new Transaction();

    const memeConfig = tx.sharedObjectRef({
      initialSharedVersion: INITIAL_VERSION,
      mutable: true,
      objectId: MEME_CONFIG
    });

    const receiving = tx.receivingRef({
    });

    const coinMetadata = tx.objectRef({
    })

    tx.moveCall({
    });

    const resData = await wallet.signAndExecuteTransaction({
      transaction: tx,
    },
    );
    console.log("signAndExecuteTransaction success", resData);

    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
}

export const buyMath = async (realCurve, sui_for_buy) => {
  try {
    return out
  } catch (err) {
    return 0
  }
}

export const buyWeb3 = async (wallet, client, memeData, sui, _min_tokens) => {
  try {
    return true;
  } catch (err) {
    console.log(err)
    return false
  }
}

export const sellMath = async (realCurve, sell_token_amount) => {
  console.log("selling ")

  return [];
}

export const sellWeb3 = async (wallet, client, memeData, sell_token, min_sui) => {
  try {
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
}
