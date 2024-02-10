import asyncio
import threading

def blocking_io_operation():
    print("Blocking operation running on", threading.current_thread().name)

async def main():
    loop = asyncio.get_running_loop()

    await loop.run_in_executor(None, blocking_io_operation)

    print("Main coroutine running on", threading.current_thread().name)


asyncio.run(main())