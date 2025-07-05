import { useParams, Link } from 'react-router';
import { useGetSingleBookQuery } from '@/store/features/apiSlice';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetSingleBookQuery(id!);

  console.log(data);

  const book = data;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (isError || !book) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load book details. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card className="p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p>
          <strong>Description:</strong> {book.description}
        </p>
        <p>
          <strong>Copies:</strong> {book.copies}
        </p>
        <p>
          <strong>Availability:</strong>{' '}
          {book.available ? (
            <span className="text-green-600 font-semibold">Available</span>
          ) : (
            <span className="text-red-600 font-semibold">Unavailable</span>
          )}
        </p>

        <div className="flex gap-4 mt-6">
          <Link to={`/edit-book/${book._id}`}>
            <Button variant="outline">Edit Book</Button>
          </Link>
          <Link to={`/borrow/${book._id}`}>
            <Button>Borrow Book</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default BookDetails;
