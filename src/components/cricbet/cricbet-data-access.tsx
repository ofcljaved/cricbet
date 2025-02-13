'use client'

import { getCricbetProgram, getCricbetProgramId } from '@project/anchor'
import { useConnection } from '@solana/wallet-adapter-react'
import { Cluster, Keypair, PublicKey } from '@solana/web3.js'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import toast from 'react-hot-toast'
import { useCluster } from '../cluster/cluster-data-access'
import { useAnchorProvider } from '../solana/solana-provider'
import { useTransactionToast } from '../ui/ui-layout'

export function useCricbetProgram() {
  const { connection } = useConnection()
  const { cluster } = useCluster()
  const transactionToast = useTransactionToast()
  const provider = useAnchorProvider()
  const programId = useMemo(() => getCricbetProgramId(cluster.network as Cluster), [cluster])
  const program = useMemo(() => getCricbetProgram(provider, programId), [provider, programId])

  const accounts = useQuery({
    queryKey: ['cricbet', 'all', { cluster }],
    queryFn: () => program.account.cricbet.all(),
  })

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  })

  const initialize = useMutation({
    mutationKey: ['cricbet', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods.initialize().accounts({ cricbet: keypair.publicKey }).signers([keypair]).rpc(),
    onSuccess: (signature) => {
      transactionToast(signature)
      return accounts.refetch()
    },
    onError: () => toast.error('Failed to initialize account'),
  })

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  }
}

export function useCricbetProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster()
  const transactionToast = useTransactionToast()
  const { program, accounts } = useCricbetProgram()

  const accountQuery = useQuery({
    queryKey: ['cricbet', 'fetch', { cluster, account }],
    queryFn: () => program.account.cricbet.fetch(account),
  })

  const closeMutation = useMutation({
    mutationKey: ['cricbet', 'close', { cluster, account }],
    mutationFn: () => program.methods.close().accounts({ cricbet: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accounts.refetch()
    },
  })

  const decrementMutation = useMutation({
    mutationKey: ['cricbet', 'decrement', { cluster, account }],
    mutationFn: () => program.methods.decrement().accounts({ cricbet: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  const incrementMutation = useMutation({
    mutationKey: ['cricbet', 'increment', { cluster, account }],
    mutationFn: () => program.methods.increment().accounts({ cricbet: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  const setMutation = useMutation({
    mutationKey: ['cricbet', 'set', { cluster, account }],
    mutationFn: (value: number) => program.methods.set(value).accounts({ cricbet: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx)
      return accountQuery.refetch()
    },
  })

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  }
}
