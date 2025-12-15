import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import GridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  // Define layout for 5 groups
  const layout = [
    { i: '1', x: 0, y: 0, w: 4, h: 2 },
    { i: '2', x: 4, y: 0, w: 4, h: 2 },
    { i: '3', x: 8, y: 0, w: 4, h: 2 },
    { i: '4', x: 0, y: 2, w: 6, h: 2 },
    { i: '5', x: 6, y: 2, w: 6, h: 2 },
  ]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div style={{ width: '100%' }}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={100}
          width={1200}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          {...({} as any)}
        >
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num.toString()}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Group {num}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="secondary">
                    Sound 1
                  </Button>
                  <Button size="sm" variant="secondary">
                    Sound 2
                  </Button>
                  <Button size="sm" variant="secondary">
                    Sound 3
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
        </GridLayout>
      </div>
    </div>
  )
}
