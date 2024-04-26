import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '../env'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-04-21'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const projectId =process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const useCdn = false

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
