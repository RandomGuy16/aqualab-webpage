// app/api/your-endpoint/route.ts
export async function GET() {
  try {
    const response = await fetch('https://us-central1-aqualab-b1032.cloudfunctions.net/api/getLast?limit=120');
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
