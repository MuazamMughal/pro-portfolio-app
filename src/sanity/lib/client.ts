import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import { QueryParams } from 'next-sanity'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


// Define a type-safe query helper
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    cache: 'force-cache',
    next: { tags },
  })
}

// Define query builder
export function defineQuery<QueryResponse>(
  query: string,
  params?: QueryParams,
  tags?: string[]
) {
  return {
    query,
    params,
    tags,
    fetch: () => sanityFetch<QueryResponse>({ query, params, tags }),
  }
}