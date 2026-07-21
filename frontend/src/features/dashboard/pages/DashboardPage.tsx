import Button from '@/shared/components/ui/Button';
import Card from '@/shared/components/ui/Card';

export default function DashboardPage() {
  return (
    <Card>
      <h1 className="mb-4 text-2xl font-bold">
        Dashboard
      </h1>

      <Button>
        Add Book
      </Button>
    </Card>
  );
}