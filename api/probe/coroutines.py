# import time

# def fetch_data():
#     print("Start fetching...")
#     time.sleep(2)
#     print("Done fetching")
#     return {'data': 1}

# def main():
#     result1 = fetch_data()
#     print(result1)

#     result2 = fetch_data()
#     print(result2)


# if __name__ == "__main__":
#     start_time = time.time()
#     main()
#     end_time = time.time()
#     print(f"Total execution time: {end_time - start_time} seconds.")

import asyncio
import time

async def fetch_data():
    print("Start fetching...")
    await asyncio.sleep(2)  # Simulate a blocking I/O operation in a non-blocking way
    print("Done fetching")
    return {'data': 1}

async def main():
    # Fetch data concurrently
    result1, result2 = await asyncio.gather(fetch_data(), fetch_data())
    print(result1)
    print(result2)

if __name__ == "__main__":
    start_time = time.time()
    asyncio.run(main())
    end_time = time.time()
    print(f"Total execution time: {end_time - start_time} seconds")
