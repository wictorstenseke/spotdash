import { useQuery } from '@tanstack/react-query'

// Placeholder query to demonstrate TanStack Query wiring
export function usePlaceholderQuery() {
  return useQuery({
    queryKey: ['placeholder'],
    queryFn: async () => {
      // Simulating an API call with static data
      await new Promise(resolve => setTimeout(resolve, 100))
      return {
        message: 'TanStack Query is working!',
        timestamp: new Date().toISOString()
      }
    },
  })
}
