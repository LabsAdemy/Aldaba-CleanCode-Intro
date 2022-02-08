export class DB {
  public static select<T>(query: string): T[] {
    console.log(query);
    return [];
  }
  // 🧼 same family of methods for all DAOs
  public static selectOne<T>(query: string): T {
    console.log(query);
    return {} as T;
  }
  public static post<T>(dao: T): string {
    console.log(dao);
    return Date.now().toString();
  }
  // 🧼 camelCase
  public static update<T>(dao: T): number {
    console.log(dao);
    return 1;
  }
}
