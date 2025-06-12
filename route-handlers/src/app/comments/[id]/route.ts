import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const comment = comments.find((comment) => comment.id === id);

  return new Response(JSON.stringify(comment), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const body = await request.json();

  const { text } = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));

  const deletedIndex = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedIndex);
}
