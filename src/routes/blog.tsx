import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog')({
  component: RouteComponent,
})
function RouteComponent() {



  return (
    <>
    <div className='w-180 mx-auto bg-zinc-400 h-10 mt-50 relative'>
    </div>
    
    
    </>
  );
}
